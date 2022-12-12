export default {
  mounted(el, binding){
    console.log(el)
    //агрузка при скроле
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
    //загрузка при скроле окончена
  },
  name: 'intersections',
}