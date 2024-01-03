interface SubMenuTypes {
  name: string;
  path: string;
  active?: string;
}

export interface MenuTypes {
  name: string;
  path: string;
  active?: string;
  subMenu?: SubMenuTypes[];
}

interface mobNavigationLinksTypes {
  name: string;
  path: string;
  active?: string;
  subMenu?: MenuTypes[];
}

const mobnavigationLinks: mobNavigationLinksTypes[] = [
  {
    name: "Divan Beds",
    path: "/beds/divan-beds",
    subMenu: [
      {
        name: "House Fabric Divan Beds",
        path: "/beds/divan-beds/house-fabric-divan-beds/",
      },
      {
        name: "Crushed Velvet Beds",
        path: "/beds/divan-beds/crushed-velvet-beds",
      },
      // {
      //   name: "Suede Fabric Divan Beds",
      //   path: "/beds/divan-beds/suede-divan-bed/",
      // },
      {
        name: "Low Divan Beds",
        path: "/beds/divan-beds/low-divan-beds/",
      },
      {
        name: "Divan Bases",
        path: "/beds/divan-beds/divanbases/",
      },
    ],
  },
  {
    name: "Ottoman Beds",
    path: "/beds/ottoman-beds/",
    subMenu: [
      {
        name: "Storage Bed",
        path: "/beds/storage-bed/",
      },

      {
        name: "Sleigh Beds",
        path: "/beds/sleigh-bed/",
        subMenu: [
          {
            name: "Florida Bed",
            path: "/beds/sleigh-beds/florida-bed/",
          },
          {
            name: "Ammbasador Bed",
            path: "/beds/sleigh-beds/ambassador/",
          },
          {
            name: "Kendall Bed",
            path: "/beds/sleigh-beds/kendall-bed/",
          },
          {
            name: "Swan Bed",
            path: "/beds/sleigh-beds/swan-bed/",
          },
          {
            name: "Wing Bed",
            path: "/beds/sleigh-beds/wing-bed/",
          },
        ],
      },
    ],
  },
  {
    name: "Shop By Bed Size",
    path: "/beds/shop-by-bed-size/",
    subMenu: [
      {
        name: 'Single (3"0)',
        path: "/beds/shop-by-bed-size/single-30/",
      },
      {
        name: 'Small Double (4"0)',
        path: "/beds/shop-by-bed-size/small-double-40/",
      },
      {
        name: 'Double (4"6)',
        path: "/beds/shop-by-bed-size/double-46/",
      },
      {
        name: 'King (5"0)',
        path: "/beds/shop-by-bed-size/king-50/",
      },
      {
        name: 'Super King (6"0)',
        path: "/beds/shop-by-bed-size/super-king-60/",
      },
    ],
  },
  {
    name: "Mattresses",
    path: "/beds/mattresses/",
  },
  {
    name: "Headboards",
    path: "/beds/headboards/",
  },
  {
    name: "SNAP FINANCE",
    path: "/snap-finance",
  },
];

export default mobnavigationLinks;
