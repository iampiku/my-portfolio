<template>
  <nav
    class="w-20 bg-slate-100 min-h-screen fixed flex flex-col justify-between z-10 border-r-2 border-slate-200"
  >
    <section>
      <div
        v-for="({ menuName, icon }, index) in menuItems"
        :key="index"
        class="my-6 py-1 mx-1 text-center text-xs transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
      >
				<div class="hover:bg-slate-300 mx-1 py-2 rounded-lg cursor-pointer">
					<img
						:src="icon"
						alt="menu-icon"
						width="16"
						height="16"
						class="mx-auto"
					/>
				</div>
        <span>{{ menuName }}</span>
      </div>
    </section>
    <section class="pb-2 mx-auto">
      <button
        type="button"
        @click="toggleTheme"
        class="px-4 py-2 mb-2 bg-slate-300 rounded-xl hover:bg-slate-400"
      >
        <img
          src="@/assets/images/settings.svg"
          alt="theme-icon"
          width="20"
          height="20"
        />
      </button>
    </section>
  </nav>
</template>

<script setup lang="ts">
import MenuItem from "@/interfaces/MenuItem";

/**
 * Menu icons
 */
import HomeIcon from "@/assets/images/home.svg";
import AboutIcon from "@/assets/images/user.svg";
import ContactIcon from "@/assets/images/envelope.svg";
import WorkIcon from "@/assets/images/briefcase.svg";

const menuItems = useState<MenuItem[]>(() => [
  {
    menuName: "Home",
    icon: HomeIcon,
  },
  {
    menuName: "About",
    icon: AboutIcon,
  },
  {
    menuName: "Work",
    icon: WorkIcon,
  },
  {
    menuName: "Contact",
    icon: ContactIcon,
  },
]);

function toggleTheme(): void {
  console.log("THEME Toggled");
}
</script>
