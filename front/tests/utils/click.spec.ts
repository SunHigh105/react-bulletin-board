import { clickRedoBtn } from '../../utils/click';

describe('clickRedoBtn', () => {
  test('class="comment_text"内のテキストが取得できること', () => {
    // document.bodyにテストしたい要素を埋め込み
    document.body.innerHTML = '<div class="comment_text">hoge</div>';
    expect(clickRedoBtn()).toBe('hoge');
  });
});

// describe('addClassToBtn', () => {
//   test('target_btnにクラス追加できること', () => {
//     document.body.innerHTML = '<button id="target_btn">Click here</button>';
//     const className = 'modifire-class';
//     addClassToBtn(className);
//     console.log(document.getElementById('target_btn'));
//     expect(document.getElementById('target_btn').classList[0]).toBe(className);
//   });
// });
