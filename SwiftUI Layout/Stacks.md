# Stacks
SwiftUI provides three types of stacks to arrange content: VStack, HStack, and ZStack. 
Each stack type serves a distinct purpose in layout management

## VStack
`VStack` arranges views vertically. 
By default, views within a VStack are centered horizontally, but you can change this alignment.
For instance, .leading or .trailing alignment properties can be specified to align views to the left or right, respectively

This code creates a VStack with views aligned to the left and 10 points of space between each view:
```swift
VStack(alignment: .leading, spacing: 10) {
    // Your views here
}
```

## HStack
`HStack` arranges views horizontally.
Similar to VStack, HStack centers its content vertically by default.
While HStack supports various alignment parameters, they are less commonly used compared to VStack

```swift
HStack(spacing: 20) {
    // Your views here
}
```

## ZStack
`ZStack` manages overlapping content.
In a ZStack, views are layered on top of each other, with the first view in the stack at the bottom and subsequent views on top. 
Use .zIndex() to change the stacking order if needed


### Apple Docs
[VStack](https://developer.apple.com/documentation/swiftui/vstack)

[HStack](https://developer.apple.com/documentation/swiftui/hstack)

[ZStack](https://developer.apple.com/documentation/swiftui/zstack)
