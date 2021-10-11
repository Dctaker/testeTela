export default class Slide{
    //Vamos receber esses valores no momento de execução da class
    constructor(slide,wrapper){
        this.slide= document.querySelector(slide)
        this.wrapper =  document.querySelector(wrapper)
    }

    //Agora ja podemos começar as funções normais

    //Previnir o comportamento padrão
    onStart(event){
        event.preventDefault()
        console.log('mouseDown')
        this.wrapper.addEventListener('mousemove', this.onMove)

    }

    //Quandor mover
    onMove(event){
        console.log('moveu')
    }

    onEnd(event){
        console.log('acabou ')
        this.wrapper.removeEventListener('mousemove', this.onMove)

    }

    //para adicionar cada elemento do Slide
    addSlideEvents(){
        this.wrapper.addEventListener('mousedown', this.onStart)
        this.wrapper.addEventListener('mouseup', this.onEnd)

    }




    /* O this esta apontando para o slide-wrapper,
    dentro de class precisamos sempre chamar o bind
    essa função fara o bind de todo o arquivo
    Com bind agora vou ter sempre referencia do meu OBJ*/
    bindEvents(){
        this.onStart = this.onStart.bind(this)
        this.onMove = this.onMove.bind(this)
        this.onEnd = this.onEnd.bind(this)

    }

    //Para iniciar
    init(){
        this.bindEvents()
        this.addSlideEvents()
        return this
    }
}