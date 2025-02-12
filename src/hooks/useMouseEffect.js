import {onMounted, onUnmounted, ref} from "vue";


export default function useMouseEffect() {
    const mouseX = ref(0);
    const mouseY = ref(0);
    const trails = ref([]);
    const explosions = ref([]);

    const updateMouseEnter = (event) => {
        mouseX.value = event.clientX;
        mouseY.value = event.clientY;
        // 添加残影
        trails.value.push({ x: event.clientX, y: event.clientY, id: Date.now() });
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


    onMounted(() =>{
        window.addEventListener("mousemove", updateMouseEnter);
        window.addEventListener("click", handleClick);
    })


    onUnmounted(()=>{
        window.removeEventListener("mousemove", updateMouseEnter);
        window.removeEventListener("click", handleClick);
    })


    return {mouseX,mouseY,trails,explosions};


}