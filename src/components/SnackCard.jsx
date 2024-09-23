import Image from "next/image";
export default function SnackCard({ snack }) {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg border-blue-400">
      {/* <Image
        src="/snack-placeholder.png" // Placeholder image, change if you have images
        alt={snack.name}
        width={200}
        height={200}
        className="object-cover w-full h-48 rounded-t-md"
      /> */}
      <h2 className="mt-4 text-xl font-bold text-blue-600">
        {snack?.name}
      </h2>
      <p className="text-gray-600">{snack?.description}</p>
      <p className="mt-2 font-semibold text-blue-500">
        ${snack?.price.toFixed(2)}
      </p>
      <p
        className={`text-sm mt-1 ${
          snack?.inStock ? "text-blue-600" : "text-red-600"
        }`}
      >
        {snack?.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}
