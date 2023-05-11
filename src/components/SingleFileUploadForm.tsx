import axios from "axios";
import { z } from "zod";

import useSWR from "swr";

// GOOD TRANSFORMER
// https://transform.tools/json-to-zod
export const docValidator = z.object({
  products: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      price: z.number(),
      discountPercentage: z.number(),
      rating: z.number(),
      stock: z.number(),
      brand: z.string(),
      category: z.string(),
      thumbnail: z.string(),
      images: z.array(z.string())
    })
  ),
  total: z.number(),
  skip: z.number(),
  limit: z.number()
});

type DocumentType = z.infer<typeof docValidator>;

function Example() {
  const fetcher = (url: string) => axios.get(url).then((res) => docValidator.parse(res.data));
  const { data, error, isLoading } = useSWR<DocumentType>("https://dummyjson.com/products", fetcher);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-3 gap-4 place-items-stretch h-56">
      {data?.products.map(function(d, idx) {
        return (
          <div className="card w-96 bg-base-100 shadow-xl" key={idx}>
            <figure><img src={d.thumbnail} alt={d.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{d.title}</h2>
              <p>{d.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })};
    </div>
  );
}


//

//
// const useDocumentData = () => {
//   return useQuery(["repoData"], async () => {
//       const res:DocumentType[] = await axios.get("https://api.github.com/repositories/207645083");
//       return docValidator.parse(res);
//     }, {
//       onError: (error) => {
//         console.log(error);
//       },
//       onSuccess: (data) => {
//         console.log(data);
//       }
//     }
//   );
// };


export default function UploadForm() {
  return (<Example />);
}
