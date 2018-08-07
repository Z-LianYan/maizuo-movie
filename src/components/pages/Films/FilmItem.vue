<template>
  <router-link class="film-item"
    tag = "div"
    :to = "{name: 'detail', params: {id: film.id}, query: {name: film.name}}"
  >
      <div class="left img-background">
          <img width="100%" :src="film.poster.origin" alt="">
      </div>
      <div class="right info-box">
            <div class="title">{{film.name}}</div>
            <div class="desc">{{film.intro}}</div>
            <div v-if = "type !== 'now-playing'" class="time">
                {{film.premiereAt | premiere}}上映


                {{film.premiereAt | day}}

            </div>
            <template v-else>
                <div  class="info">
                    <span class="number">{{film.cinemaCount}}</span>家影院上映

                    <span class="number">{{film.watchCount}}</span>人购票
                </div>
                <div class="grade">{{film.grade}}</div>
            </template>
            


            
            
            
      </div>
  </router-link>
</template>
<script>
export default {
  name: 'FilmItem',
  props:['film', 'type']
}
</script>

<style lang="scss" scoped>
    .film-item {
        width: 100%;
        padding: 20px 0;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        display: flex;
        .left {
            width: 0.6rem;
            height: 0.8256rem;
            flex-grow: 0;flex-shrink: 0;
        }

        .info-box{
            padding-left: 15px;
            flex-grow: 1;flex-shrink: 1;
            position: relative;
            overflow: hidden;
            display: flex;flex-flow: column;
            justify-content: space-between;
            .title {
                    font-size: 16px;
                    line-height: 32px;
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
            }

            .desc,.info,time {
                height: 24px;
                line-height: 24px;
                color: #8e8e8e;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                
                .number {
                    color: #8aa2bf;
                }
            }
            .desc{
                width: 70%;
            }
            .time {
                color: #ffb375;
            }
            .grade {
                position: absolute;
                right: 15px;
                font-size: 16px;
                line-height: 32px;
                color: #fc7103;
                top: 0;
            }
        }
    }
</style>

