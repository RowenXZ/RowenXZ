interface IAudioProps {
    url: any,
    loop: boolean
    autoPlay?: true,
    controls?: false
}
const AudioPlay = (props: IAudioProps) => {
    return (
        <audio
            src={props.url.default} // 引入本地音频
            controlsList="nodownload"
            autoPlay={true}
            controls={false}
            loop={props.loop}>
            <track kind="captions" />
            您的浏览器不支持 audio 元素
        </audio>

    )

}

export default AudioPlay