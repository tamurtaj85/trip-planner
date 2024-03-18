type TReactChildren = { children?: React.ReactNode };

type TDestinationDetailTabs =
  | 'OVERVIEW'
  | 'BOOKINGS'
  | 'BUDGET'
  | 'PACKING_LIST'
  | 'THINGS_TO_KNOW';

interface IDestinationDetailTabs {
  key: string;
  name: string;
}
