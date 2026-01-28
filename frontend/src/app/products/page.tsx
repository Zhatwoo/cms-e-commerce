import Link from "next/link";

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    price: '$35',
    color: 'Green',
  },
  {
    id: 3,
    name: 'Artwork Tee',
    href: '#',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    price: '$89',
    color: 'White',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    price: '$35',
    color: 'Black',
  },
  // More products...
  {
    id: 5,
    name: 'Focus Card Tray',
    href: '#',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    price: '$64',
    color: 'Walnut',
  },
  {
    id: 6,
    name: 'Focus Multi-Pack',
    href: '#',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: '3 refill packs of paper cards.',
    price: '$39',
    color: 'Paper',
  },
];

export default function ProductListing() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">All Products</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <div className="h-full w-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                    Product Image
                  </div>
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-white">{product.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={`/products/${product.id}`}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-8 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  View Details<span className="sr-only">, {product.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
