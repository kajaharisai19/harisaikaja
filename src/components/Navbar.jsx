import { useEffect, useMemo, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "publications", label: "Publications" },
    ],
    []
  );

  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const NAV_OFFSET = 110;

    const onScroll = () => {
      const scrollPos = window.scrollY + NAV_OFFSET;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (nearBottom) {
        setActiveId("publications");
        history.replaceState(null, "", "#publications");
        return;
      }

      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = s.id;
      }

      setActiveId(current);
      history.replaceState(null, "", `#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  const linkClass = (id) =>
    [
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      activeId === id
        ? "bg-black text-white"
        : "text-gray-700 hover:bg-gray-100",
    ].join(" ");

  return (
    <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl p-3">
        <NavigationMenu>
          <NavigationMenuList>
            {sections.map((s) => (
              <NavigationMenuItem key={s.id}>
                <NavigationMenuLink
                  href={`#${s.id}`}
                  className={linkClass(s.id)}
                >
                  {s.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
