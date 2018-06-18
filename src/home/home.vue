<template>
<div>
    <div class="doc-info session" v-loading="loading" element-loading-text="拼命查询中">
        <div class="basic-info">
                    <img src="../assets/images/doctor.jpg"/>
                    <div class="profile">
                        <h3>{{selectedDoc.name}}</h3>
                        <span class="title">{{selectedDoc.title}}</span>
                    </div>
                </div>
                <div class="appt-setting ">
                    <div class="header">网上预约设置</div>
                    <div class="input-container">
                        每次放号间隔时间
                            <input name="appt-amount" required type="text" @change="inputChange(1)" v-model="selectedDoc.apptSetting.interval"/>
                        小时
                    </div>
                    <div class="input-container">
                        每次放号数量
                            <input name="appt-amount" required type="text" @change="inputChange(1)" v-model="selectedDoc.apptSetting.amount"/>
                        个号
                    </div>
                    <div class="input-container">
                        提前
                            <input name="appont-amount" required type="text" @change="inputChange(1)" v-model="selectedDoc.apptSetting.daysAhead"/>
                        天放号
                    </div>
                    <button class="md-blue-button md-button" @click="timeSet">保存设置</button>
        </div>
    </div>
    <div class="header">挂号队列</div>
 <draggable v-model="selectedDoc.appts" @update="updatePatientsList">
        <transition-group>
              <div class="patient" v-for="(patient,index) in selectedDoc.appts" :key="patient.id">
                     <h3>{{index+1}}号</h3>
                     <ul class="patient-info">
                         <li><span class="name">{{patient.name}}</span><span class="sex">{{patient.sex}}</span></li>
                         <li><span class="appt-method">{{patient.apptMethod ? '网上预约' : '线下挂号'}}</span></li>
                     </ul>
              </div>
        </transition-group>
    </draggable>
  </div>
</template>
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
