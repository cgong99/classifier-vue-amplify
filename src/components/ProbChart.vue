<template>
    <div v-if="response" id="chart">
        <apexchart type="bar" height="350" width='80%' align="center" :options="chartOptions" :series="cleanedData"></apexchart>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed : {
        ...mapState(['response','names']),
        rawData() {
            
            if (this.response) {
                return JSON.parse(this.response.predicted_prob)[0]
            } else {
                return null
            }
        },
        cleanedData() {
            if (this.rawData) {
                return [{name: "prob", data: this.rawData}]
            } else {
                return null
            }
        },
        chartOptions() {
            return {
                chart: {
                    type: 'bar',
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: this.names
                },
                yaxis: {
                    decimalsInFloat: 2
                },
            }
        }
    },


}
</script>

<style>

</style>