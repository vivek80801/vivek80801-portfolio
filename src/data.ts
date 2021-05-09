export interface IProject {
  id: number;
  name: string;
  imgs: string[];
  link: string;
  imgNum: number;
  githubLink: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: "student app",
    imgs: ["student-app-home", "student-app-student", "student-app-teacher"],
    link: "https://stundent-app.netlify.app/",
    imgNum: 0,
    githubLink: "https://github.com/vivek80801/stundent-app/"
  },
  {
    id: 2,
    name: "cloth shop",
    imgs: [
      "cloth-shop-home",
      "cloth-shop-men",
      "cloth-shop-register",
      "cloth-shop-dashboard",
      "cloth-shop-cart-page",
      "cloth-shop-product-details",
      "cloth-shop-dashboard-admin",
      "cloth-shop-banned-user",
      "cloth-shop-edit-users",
      "cloth-shop-register",
    ],
    link: "https://vivek80801-cloth-shop.netlify.app/",
    imgNum: 0,
    githubLink: "https://github.com/vivek80801/cloth-shop/"
  },
  {
    id: 3,
    name: "ecommarce",
    imgs: [
      "vishavkarma-foods-home",
      "vishawkarma-products",
      "vishawkarma-details",
      "vishawkarma-cart-page",
    ],
    link: "https://vishavkarma-foods.netlify.app/",
    imgNum: 0,
    githubLink: "https://github.com/vivek80801/ecommarce-pwa/"
  },
];
