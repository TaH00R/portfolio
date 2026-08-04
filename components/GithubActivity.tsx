import {GitHubCalendar} from "react-github-calendar";

export default function GithubActivity() {
  return (
    <section className="mx-auto mt-12 max-w-5xl px-6">
      <GitHubCalendar
        username="TaH00R"
        colorScheme="dark"
        blockSize={13}
        blockMargin={4}
        fontSize={14}
      />
    </section>
  );
}