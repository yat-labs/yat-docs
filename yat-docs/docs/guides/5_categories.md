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
| `0x00` | `0x00` | 32 bytes    | Registered Tari public key for this yat      |
| `0x00` | `0x01` | 32 bytes    | Modifiers to apply to the EmojiId prior to rendering for display |
| `0x00` | `0x02` |             | Description for this EmojiId                 |
| `0x00` | `0x03` |             | Expiration date for this EmojiId             |
| `0x00` | `0x04` |             | Redirect address for emoji URL. Browser will be redirected appending original URI path |
| `0x00` | `0x05` |             | Nickname for this EmojiId                    |
| `0x00` | `0x06` |             | The preferred display representation for this EmojiId |
| `0x01` | `0x01` |             | Tari public key                              |
| `0x01` | `0x02` |             | Tari Schnorr signature (R,s)                 |

#### Cryptocurrency addresses

| Class | Tag    | Type / Size | Description                         |
|:------|:-------|:------------|:------------------------------------|
| 0x10  | `0x01` | 69 bytes    | Monero standard address             |
| 0x10  | `0x02` | 69 bytes    | Monero sub address                  |
| 0x10  | `0x03` | 34 bytes    | Bitcoin address                     |
| 0x10  | `0x04` |             | Ethereum address                    |
| 0x10  | `0x10` |             | Binance Coin                        |
| 0x10  | `0x11` |             | Tether                              |
| 0x10  | `0x12` |             | Cardano                             |
| 0x10  | `0x13` |             | Dogecoin                            |
| 0x10  | `0x14` |             | Ripple                              |
| 0x10  | `0x15` |             | Polkadot                            |
| 0x10  | `0x16` |             | Internet Computer                   |
| 0x10  | `0x17` |             | Bitcoin Cash                        |
| 0x10  | `0x18` |             | Uniswap                             |
| 0x10  | `0x19` |             | Litecoin                            |
| 0x10  | `0x1A` |             | Chainlink                           |
| 0x10  | `0x1B` |             | USD Coin                            |
| 0x10  | `0x1C` |             | Stellar                             |
| 0x10  | `0x1D` |             | Solana                              |
| 0x10  | `0x1E` |             | VeChain                             |
| 0x10  | `0x1F` |             | Ethereum Classic                    |
| 0x10  | `0x20` |             | EOS                                 |
| 0x10  | `0x21` |             | THETA                               |
| 0x10  | `0x22` |             | Wrapped Bitcoin                     |
| 0x10  | `0x23` |             | TRON                                |
| 0x10  | `0x24` |             | Filecoin                            |
| 0x10  | `0x25` |             | Binance USD                         |
| 0x10  | `0x26` |             | Aave                                |
| 0x10  | `0x27` |             | Neo                                 |
| 0x10  | `0x28` |             | SHIBA INU                           |
| 0x10  | `0x29` |             | Polygon                             |
| 0x10  | `0x2A` |             | Huobi Token                         |
| 0x10  | `0x2B` |             | Terra                               |
| 0x10  | `0x2C` |             | Bitcoin SV                          |
| 0x10  | `0x2D` |             | FTX Token                           |
| 0x10  | `0x2E` |             | PancakeSwap                         |
| 0x10  | `0x2F` |             | IOTA                                |
| 0x10  | `0x30` |             | Tezos                               |
| 0x10  | `0x31` |             | Klaytn                              |
| 0x10  | `0x32` |             | Cosmos                              |
| 0x10  | `0x33` |             | Dai                                 |
| 0x10  | `0x34` |             | Maker                               |
| 0x10  | `0x35` |             | Avalanche                           |
| 0x10  | `0x36` |             | Kusama                              |
| 0x10  | `0x37` |             | THORChain                           |
| 0x10  | `0x38` |             | Algorand                            |
| 0x10  | `0x39` |             | Crypto.com Coin                     |
| 0x10  | `0x3A` |             | Compound                            |
| 0x10  | `0x3B` |             | BitTorrent                          |
| 0x10  | `0x3C` |             | Dash                                |
| 0x10  | `0x3D` |             | Zcash                               |
| 0x10  | `0x3E` |             | UNUS SED LEO                        |
| 0x10  | `0x3F` |             | Waves                               |
| 0x10  | `0x40` |             | Elrond                              |
| 0x10  | `0x41` |             | Bitcoin BEP2                        |
| 0x10  | `0x42` |             | NEM                                 |
| 0x10  | `0x43` |             | Decred                              |
| 0x10  | `0x44` |             | yearn.finance                       |
| 0x10  | `0x45` |             | Revain                              |
| 0x10  | `0x46` |             | Chiliz                              |
| 0x10  | `0x47` |             | Synthetix                           |
| 0x10  | `0x48` |             | Hedera Hashgraph                    |
| 0x10  | `0x49` |             | TerraUSD                            |
| 0x10  | `0x4A` |             | OKB                                 |
| 0x10  | `0x4B` |             | Zilliqa                             |
| 0x10  | `0x4C` |             | Telcoin                             |
| 0x10  | `0x4D` |             | Nano                                |
| 0x10  | `0x4E` |             | Nexo                                |
| 0x10  | `0x4F` |             | Decentraland                        |
| 0x10  | `0x50` |             | Qtum                                |
| 0x10  | `0x51` |             | SushiSwap                           |
| 0x10  | `0x52` |             | NEAR Protocol                       |
| 0x10  | `0x53` |             | Holo                                |
| 0x10  | `0x54` |             | Stacks                              |
| 0x10  | `0x55` |             | Basic Attention Token               |
| 0x10  | `0x56` |             | Ontology                            |
| 0x10  | `0x57` |             | Celsius                             |
| 0x10  | `0x58` |             | Enjin Coin                          |
| 0x10  | `0x59` |             | Bitcoin Gold                        |
| 0x10  | `0x5A` |             | Theta Fuel                          |
| 0x10  | `0x5B` |             | The Graph                           |
| 0x10  | `0x5C` |             | DigiByte                            |
| 0x10  | `0x5D` |             | Fantom                              |
| 0x10  | `0x5E` |             | Horizen                             |
| 0x10  | `0x5F` |             | UMA                                 |
| 0x10  | `0x60` |             | Siacoin                             |
| 0x10  | `0x61` |             | Bancor                              |
| 0x10  | `0x62` |             | 0x                                  |
| 0x10  | `0x63` |             | OMG Network                         |
| 0x10  | `0x64` |             | Helium                              |
| 0x10  | `0x65` |             | ICON                                |
| 0x10  | `0x66` |             | Paxos Standard                      |
| 0x10  | `0x67` |             | Ravencoin                           |
| 0x10  | `0x68` |             | TrueUSD                             |
| 0x10  | `0x69` |             | SwissBorg                           |
| 0x10  | `0x6A` |             | Venus                               |
| 0x10  | `0x6B` |             | Curve DAO Token                     |
| 0x10  | `0x6C` |             | Harmony                             |
| 0x10  | `0x6D` |             | Celo                                |
| 0x10  | `0x6E` |             | Ankr                                |
| 0x10  | `0x6F` |             | Arweave                             |
| 0x10  | `0x70` |             | BakeryToken                         |
| ...   |        |             |                                     |
| 0x3f  | 0xff   | 3-8 + 1-128 | Unspecified (Ticker:Address string) |

#### Internet addresses / URIs

Non DNS internet-based URLS and URIs.

| Class | Tag  | Type / Size     | Description                                                                 |
|:------|:-----|:----------------|:----------------------------------------------------------------------------|
| 0x40  | 0x00 | 56+2 bytes      | Onion3 address                                                              |
| 0x40  | 0x01 | Up to 255 bytes | Web URL (e.g. <https://tari.com/about>). For host names use an `A` DNS record |
| 0x40  | 0x02 |                 | URI:Web with meta                                                           |
| 0x41  | 0x01 |                 | DNS:A                                                                       |
| 0x41  | 0x1C |                 | DNS:AAAA                                                                    |
| 0x41  | 0x05 |                 | DNS:CNAME                                                                   |
| 0x41  | 0x1D |                 | DNS:LOC                                                                     |
| 0x41  | 0x0F |                 | DNS:MX                                                                      |
| 0x41  | 0x02 |                 | DNS:NS                                                                      |
| 0x41  | 0x3D |                 | DNS:OpenPGP                                                                 |
| 0x41  | 0x10 |                 | DNS:TXT                                                                     |
| 0x60  | 0x00 |                 | Social Media                                                                |
| 0x62  | 0x00 |                 | Payment Address                                                             |


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
