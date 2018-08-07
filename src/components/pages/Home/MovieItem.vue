<template>
    <li class="home-movie-item">
        <div class="img-background img-box">
            <img width="100%" v-lazy="info.cover.origin" alt="">
        </div>

        <div class="info">
            <div class="left">
                <div class="title">{{info.name}}</div>
                <div v-if = "type === 'now-playing'" class="desc">
                    {{info.cinemaCount}}家影院上映    {{info.watchCount}}人观看
                </div>
            </div>
            <div class="right">
                <div v-if = "type === 'now-playing'"  class="rage">{{info.grade}}</div>
                <div v-else class="time"> {{info.premiereAt | premiere}} 上映</div>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    name: 'HomeMovieItem',
    props: ['info', 'type']
}
</script>
<style lang="scss">
    .home-movie-item {
        margin: 0 17px 17px 17px;
        background-color: #f9f9f9;
        -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
        cursor: pointer;
        .img-box {
            height: 1.9181rem;
        }

        .info {
            padding: 13px;
            background: #fff;
            display: flex;justify-content: space-between;
            align-items: center;
        }

        .title {
            font-size: 12px;
            line-height: 15px;
        }
        .desc {
            font-size: 8px;
            color: #9a9a9a;
            line-height: 15px;
        }
        .rage {
            color: #f78360;
            display: inline-block;
            float: right;
            margin-right: 15px;
            font-size: 18px;
        }
        .time {
                font-size: 10px;
                color: RGB(245, 162, 125);
                line-height: 15px;
        }
    }
</style>

