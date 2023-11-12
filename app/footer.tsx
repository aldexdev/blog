import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer>
      <div className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
        <div className="grow text-left">
        {`© ${new Date().getFullYear()}`} Alejandro Delgado (
          <A target="_blank" href="https://twitter.com/aldexdev">
            @aldexdev
          </A>
          )
        </div>
        <div>
          <A target="_blank" href="https://github.com/aldexdev">
            Source
          </A>
        </div>
      </div>
    </footer>
  );
}
