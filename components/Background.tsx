/** Fixed decorative background: grid, blurred blobs and film grain. */
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="grid" />
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="noise" />
    </div>
  );
}
