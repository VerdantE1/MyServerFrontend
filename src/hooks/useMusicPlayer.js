import {onBeforeUnmount, onMounted, onUnmounted, ref} from "vue";

export function useMusicPlayer() {
    const isPlaying = ref(false);
    const songName = ref("Click left button pls");
    const audio = ref(null);


    const initAudio = () => {
        audio.value = new Audio("src/music/tiktok.mp3"); // 替换为你的音频路径
        audio.value.loop = true; // 设置循环播放
    };

    const togglePlayer = () => {
        if (isPlaying.value) {
            audio.value.pause();
        } else {
            audio.value.play();
        }
        // 更新歌曲名称
        audio.value.onplay = () => {
            songName.value = "Playing: TikTok"; // 更改为你想要的歌曲名称
        };

        audio.value.onpause = () => {
            songName.value = "Pause"; // 暂停时的状态
        };
        isPlaying.value = !isPlaying.value;
    };

    onMounted(() => {
        initAudio();

    });


    onBeforeUnmount(() => {
        if (audio.value) {
            audio.value.pause();
            audio.value = null;
        }
    });

    return {
        isPlaying,
        songName,
        togglePlayer,
    };
}