import { Component, h } from "@stencil/core";

@Component({
  tag: "d3-demo",
  styleUrl: "demo.css",
  shadow: true
})
export class Demo {
  render() {
    return [
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nunc enim, maximus eu consequat a, consequat in purus. Phasellus nec
        vehicula nunc. Mauris ante neque, bibendum at ornare malesuada, commodo
        tincidunt nisl. Mauris non dignissim nisl. Pellentesque dignissim tortor
        vitae tincidunt rhoncus. Ut fringilla felis vel quam sodales lacinia.
        Curabitur ut lacus ultrices, lacinia magna ac, convallis augue. Morbi
        tincidunt justo vitae neque pulvinar mattis. Ut commodo justo ut dui
        scelerisque laoreet.
      </p>,
      <p>
        Donec et orci quis elit ultricies posuere sed nec nibh. Maecenas aliquet
        pellentesque massa et congue. Nunc eu massa blandit, sagittis ex sed,
        porttitor sapien. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec pulvinar augue eget
        dui bibendum, rutrum elementum enim mollis. Quisque laoreet ligula sed
        lacus aliquet dictum. In tempor est nec dolor laoreet, nec volutpat sem
        iaculis. In efficitur laoreet velit nec aliquam. In sed ullamcorper
        justo. Ut non neque ligula. Donec sollicitudin posuere lorem, in viverra
        nisi tristique in. Nunc luctus tortor ac turpis tempor pulvinar. Cras
        augue ipsum, scelerisque at lacinia vitae, consequat non ligula.
      </p>,
      <p>
        Maecenas lobortis condimentum risus non fringilla. Phasellus et tellus
        ex. Sed scelerisque est vitae tellus tempus, eget ultricies dui cursus.
        Nunc rhoncus auctor massa, at posuere sapien sollicitudin quis. Nunc
        sollicitudin nunc vel purus euismod, ut ultrices turpis convallis.
        Curabitur pharetra velit purus, eu tempor mi molestie eget. Cras ornare
        aliquet lectus, vitae imperdiet elit facilisis a. Ut ac sapien vitae sem
        convallis gravida. Nulla bibendum mauris eu nulla ultricies, eu
        sollicitudin eros aliquam. Mauris rhoncus bibendum mollis. In sit amet
        maximus lacus.
      </p>,
      <p>
        Aliquam vel dignissim turpis. Maecenas efficitur augue quam, sed gravida
        odio tristique in. Nunc finibus tempor nisl. Suspendisse euismod dui
        egestas tristique posuere. In a ullamcorper mauris. Integer et sapien
        ullamcorper augue dictum faucibus et eget quam. In hac habitasse platea
        dictumst. Cras tristique nulla ac ullamcorper rhoncus. Sed scelerisque
        nec dolor at suscipit. Phasellus enim turpis, elementum non nunc non,
        sodales tempus nisl. Donec et velit in nibh ullamcorper vehicula.
        Phasellus sit amet leo varius, finibus neque vitae, pharetra arcu.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec a enim at orci cursus varius a quis massa. Donec
        efficitur imperdiet condimentum.
      </p>,
      <p>
        Aenean eleifend, mauris quis pharetra vestibulum, mauris lacus
        consectetur dolor, laoreet convallis magna nunc quis tortor. Morbi
        interdum orci et lectus laoreet efficitur. Praesent ut augue nisi.
        Phasellus feugiat tortor in eleifend tristique. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Proin scelerisque condimentum justo, ut tempus sem feugiat nec. Vivamus
        mi arcu, ultricies id viverra sed, hendrerit sit amet dolor. Vestibulum
        nibh metus, placerat nec tempor vitae, varius ac urna. Aliquam eget
        mollis mauris, non pellentesque sapien.
      </p>
    ];
  }
}
