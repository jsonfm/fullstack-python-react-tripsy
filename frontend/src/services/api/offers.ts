class OffersService {
  getMainOffers = ({
    limit = 100,
    offset = 0,
  }: {
    limit?: number;
    offset?: number;
  } = {}) => {
    console.log(limit, offset);
    return [1, 2, 3, 4];
  };
}

export const offersService = new OffersService();
