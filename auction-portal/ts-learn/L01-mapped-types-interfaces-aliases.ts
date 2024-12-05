
// Wcześniej alias typu
// type Money = number;

type Money = {
  amount: number;
  currency: 'PLN' | 'USD' | 'EUR';
}

type Auction = {
  id: number;
  title: string;
  description: string;
  startPrice: Money;
  currentPrice: Money;
  isClosed: boolean;
}

const auction: Auction = {
  id: 1,
  title: 'Aukcja o zabawie',
  description: 'Aukcja o zabawie',
  // Po zmianie Money widzę co mam do poprawki.
  startPrice: 1000,
  currentPrice: 1000,
  isClosed: false
}

const auctionId: number = auction.id;
// Mapped type:
const auctionId2: Auction['id'] = auction.id;
