const SoldBook = () => {
  const list = []
  return (
    <div>
      <p className="text-blue font-bold text-2xl text-center mt-[100px]">
        Sood Book
      </p>
      <table className="w-full">
        <thead>
          <tr>
            <th>Manga</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Manga</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th>Quantity</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SoldBook;