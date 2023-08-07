import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full lg:p-5 p-0 mt-6 mb-16 lg:mb-12">
      <h1 className="text-4xl md:text-6xl">Products</h1>
      <ThemeSelector />
    </div>
  );
}
