<template>
    <div class="content">
            <div class="session timeset">
                <h2>间隔时间</h2>
                <div class="timeset-content">
                    <div>
                        间隔时间：
                        <md-input-container class="input-container">
                            <input required type="text" v-model="space" />
                        </md-input-container>小时
                    </div>
                    <div>
                        每个间隔挂号数量：
                        <md-input-container class="input-container">
                            <input required type="text" v-model="spaceAmount" />
                        </md-input-container>个
                    </div>
                    <div>
                        提前
                        <md-input-container class="input-container">
                            <input required type="text" v-model="spaceDay" />
                        </md-input-container>天挂号：
                    </div>
                </div>
                <button class="md-button md-blue-button">保存设置</button>
            </div>
            <div class="session timeset">
                <h2>上班时间</h2>
                <div class="timeset-content">
                    <div>
                        午休时间：
                        <md-input-container class="input-container">
                            <input required type="text" v-model="noonTimeStart"/>
                        </md-input-container>点起
                        <md-input-container class="input-container">
                            <input required type="text" v-model="noonTimeEnd"/>
                        </md-input-container>点止
                    </div>
                    <div>
                        上班时间：
                        <md-input-container class="input-container">
                            <input required type="text" v-model="workTimeStart"/>
                        </md-input-container>点起
                        <md-input-container class="input-container">
                            <input required type="text" v-model="workTimeEnd"/>
                        </md-input-container>点止
                    </div>
                </div>
                <button class="md-button md-blue-button">保存设置</button>
            </div>
        </div>
</template>

<script src="./timeSet.js"></script>
<style src="./timeSet.scss" lang="scss"></style>