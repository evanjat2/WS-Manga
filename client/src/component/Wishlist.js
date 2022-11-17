const Wishlist = () => {
  const list = []
  return (
    <div>
      <p className="text-blue font-bold text-2xl text-center mt-[100px]">
        My Wishlist
      </p>
      <table className="w-full">
        <thead>
          <tr>
            <th>Manga</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Manga</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Wishlist;
