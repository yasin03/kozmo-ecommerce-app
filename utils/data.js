import { Image, View } from "react-native";

<View className="mt-8">
  <View className="flow-root">
    <View role="list" className="-my-6 Viewide-y Viewide-gray-200">
      <View key={product.id} className="flex py-6">
        <View className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </View>

        <View className="ml-4 flex flex-1 flex-col">
          <View>
            <View className="flex justify-between text-base font-medium text-gray-900">
              <View>
                <View href={product.href}>{product.name}</View>
              </View>
              <View className="ml-4">{product.price}</View>
            </View>
            <View className="mt-1 text-sm text-gray-500">{product.color}</View>
          </View>
          <View className="flex flex-1 items-end justify-between text-sm">
            <View className="text-gray-500">Qty {product.quantity}</View>

            <View className="flex">
              <TouchableOpacity
                type="TouchableOpacity"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
</View>
