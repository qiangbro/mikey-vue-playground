<template>
  <div>
    <div class='left'>左</div>
    <div class='right'>右</div>
    <div class='top'>上</div>
    <div class='bottom'>下</div>

    <div>

      <div class="g-container">
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "ScssSample"
  }
</script>

<style scoped lang="scss">

  .left,
  .right,
  .top,
  .bottom {
    margin: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #000;
    text-align: center;

  }

  .left {
    box-shadow: -7px 0 5px -5px #333;
  }

  .right {
    box-shadow: 7px 0 5px -5px #333;
  }

  .top {
    box-shadow: 0 -7px 5px -5px #333;
  }

  .bottom {
    box-shadow: 0 7px 5px -5px #333;
  }

  $lineCount: 4;
  $count: 8;

  @function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
  }

  @function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
  }

  .g-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
  }

  .g-queue {
    display: flex;
    flex-direction: column;
    flex-basis: 24%;

  }

  .g-item {
    position: relative;
    width: 100%;
    margin: 2.5% 0;
  }

  @for $i from 1 to $lineCount+1 {
    .g-queue:nth-child(#{$i}) {
      @for $j from 1 to $count+1 {
        .g-item:nth-child(#{$j}) {
          height: #{randomNum(300, 50)}px;
          background: randomColor();

          &::after {
            content: "#{$j}";
            position: absolute;
            color: #fff;
            font-size: 24px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }

</style>