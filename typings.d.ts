export type Tip = {
  id?: string;
  title: string;
  text: string;
};

export type Tips = {
  tips: Tip[];
};

export type NavLinkType = "tips" | "about";
