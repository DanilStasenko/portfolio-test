export interface ICard {
  id: number;
  attributes: {
    title: string;
    desc: string;
    niche: string;
    client: string;
		path: string;
    createdAt: string;
    updatedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            [key: string]: {
              name: string;
              ext: string;
              mime: string;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string | null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}