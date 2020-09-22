---
id: categories
slug: /categories
title: Yat record categories
---

:::note
The Yat categories are a superset of the Power ups on the y.at website. Currently only redirects (Category `0x4001`)
are supported on y.at.
:::

## Yat record types

Yat record types are grouped together according to the type of data they store. The data types are classified according
to their category class, and each class has multiple data types grouped under it, each with a different tag.

Tags are unsigned 16-bit integers, or two bytes. The higher byte (2nd byte in little-endian format) indicates the data
class, and the lower order byte describes the category.

The following is not an exhaustive list, and will very likely be expanded as time goes on.

### Category classes

| Value           | Data class                               |
|:----------------|:-----------------------------------------|
| `0x00` - `0x0f` | Tari records                             |
| `0x10` - `0x3f` | Cryptocurrency addresses                 |
| `0x40`          | Internet addresses / urls                |
| `0x41` - `0x42` | DNS records                              |
| `0x50` - `0x5f` | Text records (excl social media handles) |
| `0x60`          | Social media handles                     |
| `0x61`          | Location data                            |

### Category tags

#### Tari categories

| Class  | Tag    | Type / Size | Description                                  |
|:-------|:-------|:------------|:---------------------------------------------|
| `0x00` | `0x00` | 32 bytes    | Registered Tari public key for this yat |
| `0x00` | `0x01` | 32 bytes    | Tari public key                              |
| `0x00` | `0x02` | 64 bytes    | Tari Schnorr signature (R,s)                 |

#### Cryptocurrency addresses

| Class | Tag    | Type / Size | Description                         |
|:------|:-------|:------------|:------------------------------------|
| 0x10  | `0x01` | 69 bytes    | Monero standard address             |
| 0x10  | `0x02` | 69 bytes    | Monero sub address                  |
| 0x10  | `0x03` | 34 bytes    | Bitcoin address                     |
| 0x10  | `0x04` |             | Ethereum address                    |
| ...   |        |             |                                     |
| 0x3f  | 0xff   | 3-8 + 1-128 | Unspecified (Ticker:Address string) |

#### Internet addresses / URIs

Non DNS internet-based URLS and URIs.

| Class | Tag  | Type / Size     | Description                                                                 |
|:------|:-----|:----------------|:----------------------------------------------------------------------------|
| 0x40  | 0x00 | 56+2 bytes      | Onion3 address                                                              |
| 0x40  | 0x01 | Up to 255 bytes | Web URL (e.g. <https://tari.com/about>). For host names use an `A` DNS record |

#### DNS

| Type       | Type id. (decimal) | Length (bytes) | Description                                                                                                                                                                                                          |
|:-----------|:-------------------|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A          | 1                  | 4              | Address record. A 32-bit IPv4 address                                                                                                                                                                                |
| AAAA       | 28                 | 16             | IPv6 address record. A 128-bit IPv6 address                                                                                                                                                                          |
| CNAME      | 5                  | 256            | Canonical name record                                                                                                                                                                                                |
| LOC        | 29                 |                | Location record Specifies a geographical location associated with a domain name                                                                                                                                      |
| MX         | 15                 |                | Mail exchange record.    Maps a domain name to a list of message transfer agents for that domain                                                                                                                     |
| NS         | 2                  |                | Name server record.  Delegates a DNS zone to use the given authoritative name servers                                                                                                                                |
| OPENPGPKEY | 61                 |                | OpenPGP public key record.   A DNS-based Authentication of Named Entities (DANE) method for publishing and locating OpenPGP public keys in DNS for a specific email address using an OPENPGPKEY DNS resource record. |
| TXT        | 16                 |                | Generally TXT data records are deferred to other tags, and created dynamically on request.                                                                                                                           |

Yat supports all official DNS record types. If a record type may fit into a different category class, (e.g.
PGPKEY) then the DNS record will take precedence (and there should not be a duplicate tag in the other class). An
exception is for TXT records, since TXT records could encode anything. Specifically, OpenAlias records can be derived
dynamically from crypto addresses stored in classes `0x10 - 0x3f` and _vice versa_.

All DNS record types with id 255 and under are in category class `0x41` and the category tag is the same as the DNS id.
Record types with ids > 255 are in category class 0x42 and will have explicit mappings to a category tag.

#### Text records

There is already a TXT DNS record type, but you might not want it returned with a DNS TXT query.

| Class | Tag  | Type / Size | Description                                                |
|:------|:-----|:------------|:-----------------------------------------------------------|
| 0x50  | 0x01 | 255 bytes   | Arbitrary UTF-8 string data                                |
| 0x50  | 0x10 | 255 bytes   | Arbitrary UTF-8 string data (not returned in TXT requests) |

## How your yats are stored

You will see the term 'merkle root' in the API reference documentation.

A Merkle tree is a very useful data structure that allows us to combine lots of arbitrary data into a single
tamper-evident checksum. It works by iteratively hashing pairs of data until a single hash representing the entire data
set is obtained. As an example,


```text
                                 +----------------+
                                 |  21bcaf340912  |
                                 +----------------+
                 +---------------------^   ^--------------------+
           +-----------+                                  +-----------+
           | 5fc87a45  |                                  | 3acbd667a |
           +-----------+                                  +-----------+
        +-------^  ^--------+                       +---------^   ^-------+
  +-----------+      +------------+          +-------------+       +-----------+
  | 2bcf39acb |      | cfbb3e9a21 |          | 44adefbee43 |       | 8c3ba1290 |
  +-----+-----+      +------+-----+          +------+------+       +-----+-----+
        ^                   ^                       ^                    ^
+-------+------+    +-------+-------+    +----------+---------  +--------+------+
| Tari pubkey  |    | Monero address|    | World's best Haiku|  |Twitter handle |
+--------------+    +---------------+    +-------------------+  +---------------+
```

When yats move onto the Tari blockchain, only the Merkle root will be stored in the blocks, though nodes will keep a
copy of the underlying data as well so that they can calculate and verify the correctness of the Merkle root.



