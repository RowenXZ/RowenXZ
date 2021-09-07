interface IAudioProps {
    url: any,
    autoPlay?: true,
    controls?: false
    loop?: true
}
const AudioPlay = (props: IAudioProps) => {
    return (
        <audio
            src={props.url.default} // 引入本地音频
            controlsList="nodownload"
            autoPlay={true}
            controls={false}
            loop={true}>
            <track kind="captions" />
            您的浏览器不支持 audio 元素
        </audio>

    )

}

export default AudioPlay