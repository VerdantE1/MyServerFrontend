import {ref,watch,onUnmounted} from "vue";


export function useAudioPlayer() {
    const audio = new Audio();
    const isPlaying = ref(false);
    const currentTime = ref(0);
    const duration = ref(0);

    // 播放音频
    const play = (src)=>{
        if(audio.src !== src){
            audio.src = src;
        }
        audio.play();
        isPlaying.value = true;
    }

    // 暂停音频
    const pause = () => {
        audio.pause();
        isPlaying.value = false;
    };

    // 跳转到指定时间
    const seek = (time) => {
        audio.currentTime = time;
    };

    // 监听音频事件
    audio.addEventListener('timeupdate', () => {
        currentTime.value = audio.currentTime;
    });

    audio.addEventListener('loadedmetadata', () => {
        duration.value = audio.duration;
    });

    // 清理音频对象
    onUnmounted(() => {
        audio.pause();
        audio.src = '';
    });

    return {
        isPlaying,
        currentTime,
        duration,
        play,
        pause,
        seek,
    };
}