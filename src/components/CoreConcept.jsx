export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img class="w-100" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
