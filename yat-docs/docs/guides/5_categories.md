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

Cryptocurrencies that have their own protocol have a designated Tag value. There is a structured, pipe `|` delimited value for addresses.

`address|description|signature|default`

Examples:
    
    0x1003 = bc1q4ywsw6ktuxmnz4qx0h3uh44m324443hv4mn9vc|My Coffee Collection|OptionalSignature|t
    0x1003 = bc1q4ywsw6ktuxmnz4qx0h3uh44m324443hv4mn9vc

| Class  | Tag    | Type / Size | Description                              |
|:-------|:-------|:------------|:-----------------------------------------|
| `0x10` | `0x01` | 69 bytes    | Monero standard address                  |
| `0x10` | `0x02` | 69 bytes    | Monero sub address                       |
| `0x10` | `0x03` | 34 bytes    | Bitcoin address                          |
| `0x10` | `0x04` |             | Ethereum address                         |
| `0x10` | `0x10` |             | Binance Coin                             |
| `0x10` | `0x12` |             | Cardano                                  |
| `0x10` | `0x13` |             | Dogecoin                                 |
| `0x10` | `0x14` |             | XRP                                      |
| `0x10` | `0x15` |             | Polkadot                                 |
| `0x10` | `0x16` |             | Internet Computer                        |
| `0x10` | `0x17` |             | Bitcoin Cash                             |
| `0x10` | `0x19` |             | Litecoin                                 |
| `0x10` | `0x1C` |             | Stellar                                  |
| `0x10` | `0x1D` |             | Solana                                   |
| `0x10` | `0x1E` |             | VeChain                                  |
| `0x10` | `0x1F` |             | Ethereum Classic                         |
| `0x10` | `0x20` |             | EOS                                      |
| `0x10` | `0x21` |             | THETA                                    |
| `0x10` | `0x23` |             | TRON                                     |
| `0x10` | `0x24` |             | Filecoin                                 |
| `0x10` | `0x27` |             | Neo                                      |
| `0x10` | `0x29` |             | Polygon                                  |
| `0x10` | `0x2B` |             | Terra                                    |
| `0x10` | `0x2C` |             | Bitcoin SV                               |
| `0x10` | `0x2F` |             | IOTA                                     |
| `0x10` | `0x30` |             | Tezos                                    |
| `0x10` | `0x31` |             | Klaytn                                   |
| `0x10` | `0x32` |             | Cosmos                                   |
| `0x10` | `0x35` |             | Avalanche                                |
| `0x10` | `0x36` |             | Kusama                                   |
| `0x10` | `0x38` |             | Algorand                                 |
| `0x10` | `0x3C` |             | Dash                                     |
| `0x10` | `0x3D` |             | Zcash                                    |
| `0x10` | `0x3F` |             | Waves                                    |
| `0x10` | `0x40` |             | Elrond                                   |
| `0x10` | `0x42` |             | NEM                                      |
| `0x10` | `0x43` |             | Decred                                   |
| `0x10` | `0x49` |             | TerraUSD                                 |
| `0x10` | `0x4B` |             | Zilliqa                                  |
| `0x10` | `0x4D` |             | Nano                                     |
| `0x10` | `0x50` |             | Qtum                                     |
| `0x10` | `0x52` |             | NEAR Protocol                            |
| `0x10` | `0x54` |             | Stacks                                   |
| `0x10` | `0x56` |             | Ontology                                 |
| `0x10` | `0x59` |             | Bitcoin Gold                             |
| `0x10` | `0x5A` |             | Theta Fuel                               |
| `0x10` | `0x5C` |             | DigiByte                                 |
| `0x10` | `0x5D` |             | Fantom                                   |
| `0x10` | `0x5E` |             | Horizen                                  |
| `0x10` | `0x60` |             | Siacoin                                  |
| `0x10` | `0x63` |             | OMG Network                              |
| `0x10` | `0x64` |             | Helium                                   |
| `0x10` | `0x65` |             | ICON                                     |
| `0x10` | `0x67` |             | Ravencoin                                |
| `0x10` | `0x6C` |             | Harmony                                  |
| `0x10` | `0x6D` |             | Celo                                     |
| `0x10` | `0x6F` |             | Arweave                                  |
| ...    |        |             |                                          |
| `0x3f` | `0xff` | 3-8 + 1-128 | Unspecified (Ticker&#124;Address string) |

#### Crypto Tokens

Crypto tokens that are based on other networks for resolution use a single Category with structured delimited data.
The list of standardized short and long names can be found here.

| Class  | Tag    | Type / Size     | Description                                                                                          |
|:-------|:-------|:----------------|:-----------------------------------------------------------------------------------------------------|
| `0x63` | `0x00` |                 | ShortName&#124;LongName&#124;SettlementNetwork&#124;Address&#124;Description&#124;Signature          |


| Short Name | Long Name                       | Settlement Network |
| ---------- | ------------------------------- | ------------------ |
| 1INCH      | 1inch                           | ETH                |
| AAVE       | Aave                            | ETH                |
| ACH        | Alchemy Pay                     | ETH                |
| AGIX       | SingularityNET                  | ETH                |
| AGLD       | Adventure Gold                  | ETH                |
| ALCX       | Alchemix                        | ETH                |
| ALICE      | MyNeighborAlice                 | ETH                |
| ALPHA      | Alpha Finance Lab               | BNB                |
| ALT        | Alitas                          | BNB                |
| AMP        | Amp                             | ETH                |
| ANC        | Anchor Protocol                 | LUNA               |
| ANKR       | Ankr                            | BNB                |
| ANT        | Aragon                          | ETH                |
| ANY        | Anyswap                         | FTM                |
| API3       | API3                            | ETH                |
| ASD        | ASD                             | ETH                |
| ATLAS      | Star Atlas                      | SOL                |
| AUDIO      | Audius                          | ETH                |
| AXS        | Axie Infinity                   | ETH                |
| BADGER     | Badger DAO                      | ETH                |
| BAKE       | BakeryToken                     | BNB                |
| BAND       | Band Protocol                   | ETH                |
| BAT        | Basic Attention Token           | ETH                |
| BEST       | Bitpanda Ecosystem Token        | ETH                |
| BETA       | Beta Finance                    | ETH                |
| BFC        | Bifrost (BFC)                   | ETH                |
| BIT        | BitDAO                          | ETH                |
| BLCT       | Bloomzed Loyalty Club Ticket    | ETH                |
| BNT        | Bancor                          | ETH                |
| BP         | Beyond Protocol                 | ETH                |
| BTCB       | Bitcoin BEP2                    | BNB                |
| BTCST      | Bitcoin Standard Hashrate Token | BNB                |
| BTRST      | Braintrust                      | ETH                |
| BTT        | BitTorrent                      | TRX                |
| BUSD       | Binance USD                     | BNB                |
| C20        | CRYPTO20                        | ETH                |
| C98        | Coin98                          | ETH                |
| CAKE       | PancakeSwap                     | BNB                |
| CEL        | Celsius                         | ETH                |
| CELR       | Celer Network                   | ETH                |
| CHSB       | SwissBorg                       | ETH                |
| CHZ        | Chiliz                          | ETH                |
| COMP       | Compound                        | ETH                |
| CRO        | Crypto.com Coin                 | ETH                |
| CRV        | Curve DAO Token                 | ETH                |
| CTSI       | Cartesi                         | ETH                |
| CVC        | Civic                           | ETH                |
| CVX        | Convex Finance                  | ETH                |
| DAI        | Dai                             | ETH                |
| DAWN       | Dawn Protocol                   | ETH                |
| DENT       | Dent                            | ETH                |
| DYDX       | dYdX                            | ETH                |
| ELF        | aelf                            | ETH                |
| ENJ        | Enjin Coin                      | ETH                |
| EPS        | Ellipsis                        | BNB                |
| FEI        | Fei Protocol                    | ETH                |
| FET        | Fetch.ai                        | ETH                |
| FIDA       | Bonfida                         | SOL                |
| FRAX       | Frax                            | ETH                |
| FTT        | FTX Token                       | BNB                |
| FUN        | FUNToken                        | ETH                |
| FX         | Function X                      | ETH                |
| GALA       | Gala                            | ETH                |
| GLM        | Golem                           | ETH                |
| GNO        | Gnosis                          | ETH                |
| GRT        | The Graph                       | ETH                |
| GT         | GateToken                       | ETH                |
| GUSD       | Gemini Dollar                   | ETH                |
| HBTC       | Huobi BTC                       | ETH                |
| HEDG       | HedgeTrade                      | ETH                |
| HEX        | HEX                             | ETH                |
| HOT        | Holo                            | ETH                |
| HT         | Huobi Token                     | ETH                |
| HUSD       | HUSD                            | ETH                |
| IDEX       | IDEX                            | ETH                |
| ILV        | Illuvium                        | ETH                |
| INJ        | Injective Protocol              | ETH                |
| INO        | INO COIN                        | ETH                |
| IQ         | Everipedia                      | EOS                |
| JST        | JUST                            | TRX                |
| KAVA       | Kava                            | BNB                |
| KCS        | KuCoin Token                    | ETH                |
| KEEP       | Keep Network                    | ETH                |
| KNC        | Kyber Network Crystal v2        | ETH                |
| KOK        | KOK                             | ETH                |
| LEO        | UNUS SED LEO                    | ETH                |
| LINA       | Linear                          | ETH                |
| LINK       | Chainlink                       | ETH                |
| LRC        | Loopring                        | ETH                |
| LUSD       | Liquity USD                     | ETH                |
| LYXe       | LUKSO                           | ETH                |
| MANA       | Decentraland                    | ETH                |
| MASK       | Mask Network                    | ETH                |
| MBOX       | MOBOX                           | BNB                |
| MDX        | Mdex                            | HT                 |
| MIR        | Mirror Protocol                 | ETH                |
| MKR        | Maker                           | ETH                |
| MLN        | Enzyme                          | ETH                |
| MNGO       | Mango Markets                   | SOL                |
| MRPH       | Morpheus.Network                | ETH                |
| MTL        | Metal                           | ETH                |
| MVL        | MVL                             | ETH                |
| NEXO       | Nexo                            | BNB                |
| NMR        | Numeraire                       | ETH                |
| NOIA       | Syntropy                        | ETH                |
| NU         | NuCypher                        | ETH                |
| NXM        | NXM                             | ETH                |
| OCEAN      | Ocean Protocol                  | ETH                |
| OGN        | Origin Protocol                 | ETH                |
| OKB        | OKB                             | ETH                |
| ORBS       | Orbs                            | ETH                |
| ORC        | Orbit Chain                     | ETH                |
| ORN        | Orion Protocol                  | ETH                |
| OXT        | Orchid                          | ETH                |
| PAXG       | PAX Gold                        | ETH                |
| PEAK       | PEAKDEFI                        | ETH                |
| PERP       | Perpetual Protocol              | ETH                |
| PLA        | PlayDapp                        | ETH                |
| POLIS      | Star Atlas DAO                  | SOL                |
| POLS       | Polkastarter                    | ETH                |
| POLY       | Polymath                        | ETH                |
| POWR       | Powerledger                     | ETH                |
| PROM       | Prometeus                       | ETH                |
| PUNDIX     | Pundi X\[new\]                  | ETH                |
| QKC        | QuarkChain                      | ETH                |
| QNT        | Quant                           | ETH                |
| RARE       | SuperRare                       | ETH                |
| RAY        | Raydium                         | ETH                |
| REN        | Ren                             | ETH                |
| RENBTC     | renBTC                          | ETH                |
| REP        | Augur                           | ETH                |
| REQ        | Request                         | ETH                |
| REV        | Revain                          | ETH                |
| RGT        | Rari Governance Token           | ETH                |
| RLC        | iExec RLC                       | ETH                |
| RPL        | Rocket Pool                     | ETH                |
| RSR        | Reserve Rights                  | ETH                |
| RUNE       | THORChain                       | BNB                |
| SAFEMOON   | SafeMoon                        | BNB                |
| SAND       | The Sandbox                     | ETH                |
| SFP        | SafePal                         | BNB                |
| SHIB       | SHIBA INU                       | ETH                |
| SKL        | SKALE Network                   | ETH                |
| SNT        | Status                          | ETH                |
| SNX        | Synthetix                       | ETH                |
| STETH      | Lido stETH                      | ETH                |
| STMX       | StormX                          | ETH                |
| STORJ      | Storj                           | ETH                |
| STPT       | Standard Tokenization Protocol  | ETH                |
| SUSHI      | SushiSwap                       | ETH                |
| SXP        | Swipe                           | ETH                |
| TEL        | Telcoin                         | ETH                |
| TITAN      | TitanSwap                       | ETH                |
| TKO        | Toko Token                      | BNB                |
| TLM        | Alien Worlds                    | ETH                |
| TRAC       | OriginTrail                     | ETH                |
| TRIBE      | Tribe                           | ETH                |
| TTT        | The Transfer Token              | ETH                |
| TUSD       | TrueUSD                         | BNB                |
| TWT        | Trust Wallet Token              | BNB                |
| UBT        | Unibright                       | ETH                |
| UMA        | UMA                             | ETH                |
| UNI        | Uniswap                         | ETH                |
| USDC       | USD Coin                        | ETH                |
| USDN       | Neutrino USD                    | ETH                |
| USDP       | Pax Dollar                      | ETH                |
| USDT       | Tether                          | ETH                |
| vBNB       | Venus BNB                       | BNB                |
| vBTC       | Venus BTC                       | BNB                |
| VGX        | Voyager Token                   | ETH                |
| VRA        | Verasity                        | ETH                |
| WBNB       | Wrapped BNB                     | BNB                |
| WBTC       | Wrapped Bitcoin                 | ETH                |
| WEMIX      | WEMIX                           | KLAY               |
| WIN        | WINkLink                        | TRX                |
| WOO        | WOO Network                     | ETH                |
| WRX        | WazirX                          | BNB                |
| XDB        | DigitalBits                     | ETH                |
| XPRT       | Persistence                     | ATOM               |
| XVS        | Venus                           | BNB                |
| XYO        | XYO                             | ETH                |
| YFI        | yearn.finance                   | ETH                |
| YGG        | Yield Guild Games               | ETH                |
| YOUC       | yOUcash                         | ETH                |
| ZRX        | 0x                              | ETH                |


#### Internet addresses / URIs

Non DNS internet-based URLS and URIs.

| Class  | Tag    | Type / Size     | Description                                                                   |
|:-------|:-------|:----------------|:------------------------------------------------------------------------------|
| `0x40` | `0x00` | 56+2 bytes      | Onion3 address                                                                |
| `0x40` | `0x01` | Up to 255 bytes | Web URL (e.g. <https://tari.com/about>). For host names use an `A` DNS record |
| `0x40` | `0x02` |                 | URI:Web with meta                                                             |
| `0x41` | `0x01` |                 | DNS:A                                                                         |
| `0x41` | `0x1C` |                 | DNS:AAAA                                                                      |
| `0x41` | `0x05` |                 | DNS:CNAME                                                                     |
| `0x41` | `0x1D` |                 | DNS:LOC                                                                       |
| `0x41` | `0x0F` |                 | DNS:MX                                                                        |
| `0x41` | `0x02` |                 | DNS:NS                                                                        |
| `0x41` | `0x3D` |                 | DNS:OpenPGP                                                                   |
| `0x41` | `0x10` |                 | DNS:TXT                                                                       |
| `0x60` | `0x00` |                 | Social Media                                                                  |
| `0x62` | `0x00` |                 | Payment Address                                                               |


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

| Class  | Tag    | Type / Size | Description                                                |
|:-------|:-------|:------------|:-----------------------------------------------------------|
| `0x50` | `0x01` | 255 bytes   | Arbitrary UTF-8 string data                                |
| `0x50` | `0x10` | 255 bytes   | Arbitrary UTF-8 string data (not returned in TXT requests) |

## Categories allowing for only one record per yat

Some categories have restrictions to prevent multiple records from being created for a given yat and that category. If an additional record is submitted for insertion the old record will be replaced.

These categories include:

- Cryptocurrency categories (class found between `0x10 - 0x3f`)
- Emoji description (`0x0002`)
- Redirect (`0x0004`)
- Emoji nickname (`0x0005`)
- Emoji preferred form (`0x0006`)

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
