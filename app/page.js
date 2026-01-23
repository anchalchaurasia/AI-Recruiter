import{ Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Made By Anchal Chaurasia</h2>
      <Button>
        <a  href="https://ai-recruiter-olmy.vercel.app/dashboard">Go to The Dashbaord</a>
      </Button>
      <h2>OR</h2>
      <Button>
        <a href="https://ai-recruiter-olmy.vercel.app/auth">Go to The login page</a>
      </Button>
    </div>
  );
}