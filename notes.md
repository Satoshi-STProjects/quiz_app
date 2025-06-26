<!--
These are personal learning notes from building a simple quiz app.
It's a casual Dev Log-style record, not a polished tutorial.
-->

# Learning Notes for Quiz App (Dev Log Style)

## HTML & CSS
- `id` vs `class`: 
  - `id` is unique per page, better for JS targeting.
  - `class` can be used multiple times, better for CSS styling and reusable.
- Inline styles (`style="..."`) are used in HTML for immediate effects, such as hiding elements before CSS loads.
- Inline styles override external CSS styles due to higher specificity.
- `*`, `*::before`, `*::after`: Universal selector with pseudo-elements; useful for resetting box-sizing.
- `box-sizing: border-box`: Makes padding and border included in the element's total width/height.
- `background` vs `background-color`: 
  - `background` can handle gradients and images.
  - `background-color` is for solid color.
- `min-height: 100vh`: Ensures minimum height of 100% of the viewport.
- `display: flex`, `align-items: center`, `justify-content: center`: Flexbox for centering content.
- `transition: all 0.3s ease`: Smooth CSS transitions.
- `transform: translateY(-2px)`: Moves element 2px upwards.
- `:disabled`, `:hover`, `:focus`: Pseudo-classes for UI states.
- `max-width: 600px`, `width: 90%`: Helps responsive design.
- `font-family`: Multiple fonts for fallback support.
- `font-weight: 700`: Bold font weight.
- `rem`, `em`, `%`, `vh`, `vw`: Relative CSS units.
- `grid`, `repeat(...)`: CSS Grid layout for responsive column layout.

## JavaScript
- `[]` = Array, `{}` = Object (like Python list and dict).
- `const`: Immutable variable (can’t be reassigned).
- `NodeList`: Array-like object returned by querySelectorAll.
- `document.querySelectorAll(...)`: Selects multiple DOM elements.
- `classList.add(...)` vs `className`: classList is preferred for modifying individual classes.
- `disabled`: Makes button unclickable.
- `addEventListener('DOMContentLoaded', init)`: Triggers `init` function after HTML is fully loaded.
- `setTimeout(() => { ... }, 1500)`: Runs code after a delay; takes a callback.
- `score++`: Increments score by 1.
- `quizData.length`: Number of quiz items (Array length).
- `Math.round(...)`: Rounds number to nearest integer.
- `forEach((item, index) => { ... })`: Iterates with element and index.

## General Tips
- JS reads top to bottom, but entry point (e.g., `DOMContentLoaded`) is often last.
- Understanding call chain (e.g., `init → showQuestion → selectAnswer → nextQuestion`) helps trace logic.
- It’s okay to loop through code multiple times to grasp structure.

#6/27/25


## 修正 / 機能追加による新たな学び

### 選択肢の状態表示ロジック
- `.selected` クラスが `.correct` / `.incorrect` より優先される場合があるため、UIが意図通りに反映されないことがある。
- 条件分岐で「選択かつ正解」「選択かつ不正解」「未選択かつ正解」の3通りに明確に分けることで、期待どおりのスタイル適用が可能。

### DOMへの要素追加 (`span`)
- `createElement()` と `append()` を使って、JSでボタン内に `span` 要素を動的に追加可能。
- ボタン内部の要素に `display: flex` を適用すると、テキストと `span` を左右に分けて配置できる（`justify-content: space-between` が有効）。

### Flexboxによるボタン内配置調整
- `align-items: center` を追加することで、縦方向の中央揃えが可能。
- `.choice-btn` に適用することで、全ボタンに統一した見た目を適用できる。

### 満点時のアニメーション演出
- `canvas-confetti` ライブラリをCDNで読み込み、`confetti()` 関数で紙吹雪エフェクトを実装。
- `Math.round((score / quizData.length) * 100)` で満点判定し、 `showResult()` 内でトリガーする。

### その他補足
- `<span>` 要素はインライン要素であり、テキストと同様に扱える。
- `disabled` 属性を付与すると、ボタンなどのフォーム要素はクリック・フォーカスできなくなる。
- `NodeList` は `querySelectorAll` の戻り値で、配列っぽく `forEach` 等で操作可能。