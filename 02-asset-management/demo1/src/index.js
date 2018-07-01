import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //将图像添加到我们现有的div
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

//加载图标字体
function component2() {
    var element = document.createElement('i');
    element.classList.add('icon-keyboard_arrow_right');
    return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());
