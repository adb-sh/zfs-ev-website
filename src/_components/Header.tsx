export default ({ ...props }) => (
  <>
    <header class="bg-white relative text-black font-normal">
      <nav class="container mx-auto py-2 flex px-4 justify-between items-center">
        <a class="flex items-center" href="/">
          <img src="/zfs-logo.webp" alt="logo" class="mx-3 h-14" />
          <span>
            Zeltlager Flensburger Schulen e.V.
          </span>
        </a>
      </nav>
    </header>

    <div class="sticky top-0 backdrop-blur bg-primary/70 dark:bg-primary-dark/60 overflow-auto">
      <div class="flex container mx-auto px-4 w-max">
        <nav>
          <ul class="flex dark:text-white text-black font-normal">
            <props.comp.HeaderMenuItems {...props} />
          </ul>
        </nav>
      </div>
    </div>
  </>
);
