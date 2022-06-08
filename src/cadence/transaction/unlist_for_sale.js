export const unlistFromSaleTx = `
import NFTMarketplace from 0x7cca98d257cb0faa
transaction(id: UInt64) {
  prepare(acct: AuthAccount) {
    let saleCollection = acct.borrow<&NFTMarketplace.SaleCollection>(from: /storage/MySaleCollection)
                            ?? panic("This SaleCollection does not exist")
    saleCollection.unlistFromSale(id: id)
  }
  execute {
    log("A user unlisted an NFT for Sale")
  }
}
`