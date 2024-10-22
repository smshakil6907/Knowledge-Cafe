import profile from "../../assets/images/profile.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
}
