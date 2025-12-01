import star from "../assets/svgs/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="Rating Stars" width={14} height={14} />
      ))}
    </>
  );
}
