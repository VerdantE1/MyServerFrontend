import {onMounted, onUnmounted, ref} from "vue";


export default function useMouseEffect() {
    const mouseX = ref(0);
    const mouseY = ref(0);
    const trails = ref([]);
    const explosions = ref([]);

    const updateMouseEnter = (event) => {
        mouseX.value = event.clientX + scrollX;
        mouseY.value = event.clientY + scrollY;
        // 添加残影
        trails.value.push({ x: mouseX.value, y: mouseY.value, id: Date.now() });
        if (trails.value.length > 10) {
            trails.value.shift(); // 限制残影数量
        }

    };

    const handleClick = (event) => {
        //添加点击爆炸特效
        explosions.value.push({x:event.clientX,y:event.clientY, id: Date.now()});
        setTimeout(()=>{
            explosions.value.shift(); //移除爆炸特效
        },500);
    }
    // 滚动事件
    const updateScroll = () => {
        scrollY.value = window.scrollY; // 获取页面的垂直滚动距离
        scrollX.value = window.scrollX;
    };


    onMounted(() =>{
        window.addEventListener("mousemove", updateMouseEnter);
        window.addEventListener("click", handleClick);
        window.addEventListener("scroll", updateScroll); // 监听滚动事件
    })


    onUnmounted(()=>{
        window.removeEventListener("mousemove", updateMouseEnter);
        window.removeEventListener("click", handleClick);
        window.removeEventListener("scroll", updateScroll); // 移除滚动事件监听
    })


    return {mouseX,mouseY,trails,explosions,scrollX,scrollY};


}