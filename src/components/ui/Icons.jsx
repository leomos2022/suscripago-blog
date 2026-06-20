import { renderToStaticMarkup } from 'react-dom/server'
import {
  ArrowLeft,
  ArrowRight,
  ArticleMedium,
  BookOpen,
  Buildings,
  ChartLineUp,
  CheckCircle,
  ClipboardText,
  Clock,
  CreditCard,
  Database,
  EnvelopeSimple,
  FileText,
  FunnelSimple,
  GearSix,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  List,
  MagnifyingGlass,
  MapTrifold,
  NewspaperClipping,
  Notebook,
  PenNib,
  Phone,
  Play,
  Question,
  RocketLaunch,
  SealCheck,
  ShieldCheck,
  Sparkle,
  Storefront,
  Target,
  UserCircle,
  UsersThree,
  VideoCamera,
  X,
  Briefcase,
  ChatText,
  House,
  PuzzlePiece
} from '@phosphor-icons/react'

const iconComponent = (Icon) => {
  const IconComponent = ({ size = 20, className = '', ...props }) => (
    <Icon
      size={size}
      weight="regular"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    />
  )

  return IconComponent
}

export const ArrowLeftIcon = iconComponent(ArrowLeft)
export const ArrowRightIcon = iconComponent(ArrowRight)
export const ArticleIcon = iconComponent(ArticleMedium)
export const BookIcon = iconComponent(BookOpen)
export const BuildingIcon = iconComponent(Buildings)
export const ChartIcon = iconComponent(ChartLineUp)
export const CheckIcon = iconComponent(CheckCircle)
export const ClipboardIcon = iconComponent(ClipboardText)
export const ClockIcon = iconComponent(Clock)
export const CreditCardIcon = iconComponent(CreditCard)
export const DatabaseIcon = iconComponent(Database)
export const EmailIcon = iconComponent(EnvelopeSimple)
export const FileIcon = iconComponent(FileText)
export const FilterIcon = iconComponent(FunnelSimple)
export const GearIcon = iconComponent(GearSix)
export const GraduationIcon = iconComponent(GraduationCap)
export const HandshakeIcon = iconComponent(Handshake)
export const LeafIcon = iconComponent(Leaf)
export const IdeaIcon = iconComponent(Lightbulb)
export const MenuIcon = iconComponent(List)
export const SearchIcon = iconComponent(MagnifyingGlass)
export const MapIcon = iconComponent(MapTrifold)
export const NewsIcon = iconComponent(NewspaperClipping)
export const NotebookIcon = iconComponent(Notebook)
export const PenIcon = iconComponent(PenNib)
export const PhoneIcon = iconComponent(Phone)
export const PlayIcon = iconComponent(Play)
export const QuestionIcon = iconComponent(Question)
export const RocketIcon = iconComponent(RocketLaunch)
export const SealIcon = iconComponent(SealCheck)
export const ShieldIcon = iconComponent(ShieldCheck)
export const SparkleIcon = iconComponent(Sparkle)
export const StoreIcon = iconComponent(Storefront)
export const TargetIcon = iconComponent(Target)
export const UserIcon = iconComponent(UserCircle)
export const UsersIcon = iconComponent(UsersThree)
export const VideoIcon = iconComponent(VideoCamera)
export const CloseIcon = iconComponent(X)
export const BriefcaseIcon = iconComponent(Briefcase)
export const MessageIcon = iconComponent(ChatText)
export const HomeIcon = iconComponent(House)
export const PuzzleIcon = iconComponent(PuzzlePiece)

const inlineMarkup = (Icon) =>
  `<span class="blog-inline-icon" aria-hidden="true">${renderToStaticMarkup(
    <Icon size={16} weight="regular" aria-hidden="true" focusable="false" />
  )}</span>`

const emojiMap = {
  '📚': inlineMarkup(BookOpen),
  '📖': inlineMarkup(BookOpen),
  '📋': inlineMarkup(ClipboardText),
  '📄': inlineMarkup(FileText),
  '🚀': inlineMarkup(RocketLaunch),
  '💡': inlineMarkup(Lightbulb),
  '🎓': inlineMarkup(GraduationCap),
  '🎯': inlineMarkup(Target),
  '✅': inlineMarkup(CheckCircle),
  '📝': inlineMarkup(PenNib),
  '👤': inlineMarkup(UserCircle),
  '📧': inlineMarkup(EnvelopeSimple),
  '📱': inlineMarkup(Phone),
  '⚡': inlineMarkup(Sparkle),
  '🌱': inlineMarkup(Leaf),
  '✍️': inlineMarkup(PenNib),
  '🔍': inlineMarkup(MagnifyingGlass),
  '📊': inlineMarkup(ChartLineUp),
  '📈': inlineMarkup(ChartLineUp),
  '🔒': inlineMarkup(ShieldCheck),
  '⚖️': inlineMarkup(Briefcase),
  '🏛️': inlineMarkup(Buildings),
  '🤝': inlineMarkup(Handshake),
  '🧩': inlineMarkup(PuzzlePiece),
  '⏰': inlineMarkup(Clock),
  '📌': inlineMarkup(Target),
  '❓': inlineMarkup(Question),
  '🏫': inlineMarkup(Buildings),
  '👔': inlineMarkup(Briefcase),
  '🔧': inlineMarkup(GearSix),
  '🛠️': inlineMarkup(GearSix),
  '💳': inlineMarkup(CreditCard),
  '🔄': inlineMarkup(RocketLaunch),
  '🗄️': inlineMarkup(Database),
  '💰': inlineMarkup(CreditCard),
  '🔢': inlineMarkup(FileText),
  '®️': inlineMarkup(SealCheck),
  '©️': inlineMarkup(FileText),
  '💬': inlineMarkup(MessageIcon),
  '📨': inlineMarkup(EnvelopeSimple),
  '🍎': inlineMarkup(Storefront),
  '🤖': inlineMarkup(RocketLaunch),
  '📬': inlineMarkup(EnvelopeSimple),
  '🎥': inlineMarkup(VideoCamera),
  '▶️': inlineMarkup(Play),
  '🏗️': inlineMarkup(Buildings),
  '🏢': inlineMarkup(Buildings)
}

export const replaceEmojiIcons = (html = '') =>
  Object.entries(emojiMap).reduce((content, [emoji, replacement]) => content.split(emoji).join(replacement), html)
