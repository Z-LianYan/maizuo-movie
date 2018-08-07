<template>
  <div class="not-found page">
        <article class="not-found-view" >
            <div class="img-background img-box">
                <img width="100%" src="/static/images/not-found.jpg" alt="" >
            </div>
            
            <p >这个页面，神秘失踪了…</p>
            <p >
                <span >不如</span>
                <router-link to ="/home" >返回卖座电影首页</router-link>
                <span >吧</span>
            </p>
        </article>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
    .not-found {
        article {
            padding-top: 48px;
            display: flex;
            flex-flow: column;
            align-items: center;


            .img-box {
                width: 2.31rem;
                height: 1.58rem;
                margin-bottom: 10px;
            }
            p {
                font-size: 16px;
                color: #666;
                line-height: 24px;
                margin: 0 0 8px;
                a {
                    padding: 0 0.2em;
                    color: #cb885e;
                    text-decoration: underline;
                }
            }
        }
    }
</style>


