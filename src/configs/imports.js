import Vue from 'vue'

import CardBall from '../components/cardBall.vue'
import {
  QBtn, QIcon, QAlert, QTransition, QList, QSideLink, QItemSide, QItemMain, QListHeader, QInnerLoading,
  QLayout, QToolbar, QToolbarTitle, QAjaxBar, QCollapsible, QListItem, QItem, QItemTile, QCard, QCardMain,
  QInfiniteScroll, QSpinner, QToggle, QInput, QCardTitle, QRating, QTooltip, QCardMedia, QItemSeparator,
  QSelect, QSlider, QRange, QAutocomplete, QSearch, QModal, QCardActions, QStepper, QStep, QStepPane, QGalleryCarousel,
  QRadio, QDataTable, QPagination
} from 'quasar'
const imports = {
  QBtn,
  QIcon,
  QAlert,
  QTransition,
  QList,
  QSideLink,
  QItemSide,
  QItemMain,
  QListHeader,
  QInnerLoading,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QAjaxBar,
  QCollapsible,
  QListItem,
  QItem,
  QItemTile,
  QCard,
  QCardMain,
  QInfiniteScroll,
  QSpinner,
  QToggle,
  QInput,
  QCardTitle,
  QRating,
  QTooltip,
  QCardMedia,
  QItemSeparator,
  QSelect,
  QSlider,
  QRange,
  QAutocomplete,
  QSearch,
  QModal,
  QCardActions,
  QStepper,
  QStep,
  QStepPane,
  QGalleryCarousel,
  QRadio,
  QDataTable,
  QPagination
}

Object.keys(imports).forEach(component => {
  Vue.component(component, imports[component])
})
Vue.component('card-ball', CardBall)
