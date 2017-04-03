<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="card-title bg-teal text-white">
          Avanced Form Two
        </div>
        <div class="card-content bg-white">
          <div class="flex wrap gutter">
            <div class="width-1of2 ">
              <div class="card bg-orange">
                1
              </div>
            </div>
            <div class="width-1of2">
              <div class="card bg-orange">
                2
              </div>
            </div>
          </div>
          <div class="flex wrap gutter">
            <div class="auto">
              <q-tabs class="justified" :refs="$refs" default-tab="tab-1">
                <q-tab name="tab-1" icon="message">
                  Dados Gerais
                </q-tab>
                <q-tab name="tab-2" icon="fingerprint">
                  Endereço
                </q-tab>
                <q-tab name="tab-3" icon="alarm">
                  Caracteristicas físicas
                </q-tab>
                <q-tab name="tab-4" icon="accessibility">
                  Liminarista
                </q-tab>
              </q-tabs>
            </div>
          </div>

          <div class="flex">
            <div ref="tab-1">dados</div>
            <div ref="tab-2">endereco</div>
            <div ref="tab-3">fis</div>
            <div ref="tab-4">limi</div>
          </div>
          <div class="flex wrap gutter">
            <div class="auto">
              <q-tabs class="justified" :refs="$refs" default-tab="tab-1">
                <q-tab name="tab-5" icon="message">
                  Dados Gerais
                </q-tab>
                <q-tab name="tab-6" icon="fingerprint">
                  Endereço
                </q-tab>
                <q-tab name="tab-7" icon="alarm">
                  Caracteristicas físicas
                </q-tab>
              </q-tabs>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <div class="flex wrap gutter">
            <div class="auto">
              <div class="floating-label">
                <input required class="full-width">
                <label>Saram</label>
              </div>
            </div>
            <div class="auto">
              <div class="floating-label">
                <input required class="full-width">
                <label>Floating Label</label>
              </div>
            </div>
            <div class="auto">
              <div class="floating-label">
                <input required class="full-width">
                <label>Floating Label</label>
              </div>
            </div><div class="auto">
            <div class="floating-label">
              <input required class="full-width">
              <label>Floating Label</label>
            </div>
          </div><div class="auto">
            <div class="floating-label">
              <input required class="full-width">
              <label>Floating Label</label>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style>
</style>
