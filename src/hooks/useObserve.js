import { useMemo, useEffect } from "react";

const useObserve = (hiddenElements) => {
  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
      // entry.target.classList.toggle("show", entry.isIntersecting);
      // if (entry.isIntersecting) observer.unobserve(entry.target); // remove observer from entry
    });
  };

  const intersectionOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    hiddenElements.forEach((el) => observer.observe(el.current));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el.current));
    };
  }, [hiddenElements, intersectionOptions]);
};

export default useObserve;
