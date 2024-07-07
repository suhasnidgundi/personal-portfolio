export const metadata = {
  title: "Home - Personal Portfolio",
  description: "",
};

export default function Page({ params }) {
  return <div>Project: {params.slug}</div>;
}
