export interface PageFlipRef {
  pageFlip: () => {
    turnToPage: (pageNumber: number) => void;
  };
}
