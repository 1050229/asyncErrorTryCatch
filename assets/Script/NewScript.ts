
//参考博客：https://www.jb51.net/article/160260.htm
//参考git： https://github.com/wiseowner/js-asynchronization-error
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
    }

    firstTimeAsyncErrorTest () {
        let p1 = () => new Promise((reslove, reject) => {
            setTimeout(() => {
                reject('async error');
            })
        });
        
        p1().catch(e => console.log(e));
    }

    secondTimeAsyncErrorTest () {
        const fetchFailure = () => new Promise((resolve, reject) => {
            setTimeout(() => {// 模拟请求
                if(1) reject('fetch failure...');
            })
        })
           
        async function main () {
            try {
                const res = await fetchFailure();
                console.log(res, 'res');
            } catch(e) {
                console.log(e, 'e.message');
            }
        }

        main();
    }
    // update (dt) {}
}
